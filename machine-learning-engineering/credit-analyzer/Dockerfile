FROM kennethreitz/pipenv

RUN mkdir /home/app

COPY credit_analyzer.py /home/app
COPY random_forest.pkl /home/app
COPY credit_analyzer_rules.py /home/app
COPY Pipfile /home/app
COPY Pipfile /home/app

WORKDIR /home/app
RUN cd /home/app

RUN pipenv install

expose 8080

ARG host
ARG port

ENV port ${port:-8080}
ENV host ${host:-0.0.0.0}

CMD pipenv run python3 /home/app/credit_analyzer.py $host $port
