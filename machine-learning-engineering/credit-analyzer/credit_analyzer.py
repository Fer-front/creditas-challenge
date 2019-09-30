import numpy as np
import pandas as pd
import pickle
import json
from flask import Flask, request
from flask_restplus import Api, Resource
import sys
import credit_analyzer_rules
import logging

logging.basicConfig(format='(%(asctime)s) %(levelname)s:%(message)s',
                    level=logging.INFO, datefmt='%m/%d/%Y %I:%M:%S %p')

flask_app = Flask(__name__)

app = Api(app=flask_app,
          version="1.0",
          title="Credit Approval Analysis",
          description='Api to analyse customer credit')

name_space = app.namespace('api/v1/credit-analyzer',
                           description='Given a customer profile, returns the probability of the customer having the credit approved and the status of the credit analysis')

with open('./random_forest.pkl', 'rb') as pickle_file:
    clf = pickle.load(pickle_file)


def main(host, port):
    print('starting flask application', file=sys.stderr)
    flask_app.run(host=host, port=port)


@name_space.route("/")
class CreditAnalyzer(Resource):

    @app.doc(params={'loan-amount': 'customer loan amount request (int)',
                     'monthly-income': 'customer monthly salary (int)',
                     'education-level-bachelor': 'indicates if customer has bachelor degree (0 or 1)',
                     'education-level-high-school': 'indicates if customer has high school degree (0 or 1)',
                     'education-level-illiterate': 'indicates if the customer is illiterate (0 or 1)',
                     'education-level-master-or-doctoral': 'Indicates if the customer has masters or doctoral degree (0 or 1)',
                     'professional-type-aposentado': 'indicates if the customer is retired (0 or 1)',
                     'professional-type-clt': 'indicates if customer has a formal job (clt) (0 or 1)',
                     'professional-type-freelancer': 'indicates if customer is freelancer (0 or 1)'})
    def get(self):
        arr = np.array([request.args['loan-amount'],
                        request.args['monthly-income'],
                        request.args['education-level-bachelor'],
                        request.args['education-level-high-school'],
                        request.args['education-level-illiterate'],
                        request.args['education-level-master-or-doctoral'],
                        request.args['professional-type-aposentado'],
                        request.args['professional-type-clt'],
                        request.args['professional-type-freelancer']]).reshape(1, -1).astype(float)

        prob_approval = clf.predict_proba(arr)[0][1]
        result = {'probability_of_credit_approval': np.around(prob_approval, decimals=4),
                  'status': credit_analyzer_rules.review(prob_approval).value}

        return json.dumps(result)


if __name__ == "__main__":
    if len(sys.argv) <= 1:
        print('please inform host and port')
    else:
        host = sys.argv[1]
        port = sys.argv[2]
        main(host, port)
