# Creditas Data Engineering Challenge

This challenge is intended to evaluate your understanding of the data engineering field and your capacity to deliver a professional solution. We will evaluate not just the correctness of your solution, but also how you approach a problem and even your coding style (yep, we're that critical).

## Description

### Data Modeling

You must have received a file named *datasets.tar.gz* along with this PDF. In this file you will find the files described below:

- `dca_dataset_loan_transactions.jsonl`:
    - This dataset is the complete list of all private loans made under USAID's DCA since it was established in 1999;
    - See more at *[https://www.usaid.gov/data/dataset/854d1b81-a517-4966-957c-5428fb4c1821](https://www.usaid.gov/data/dataset/854d1b81-a517-4966-957c-5428fb4c1821)*.
- `dca_dataset_utilization_and_claims.jsonl`:
    - This USAID dataset shows the partial credit guarantees that USAID has issued since the development credit authority program was founded in 1999;
    - See more at *[https://www.usaid.gov/data/dataset/31fbe412-d87a-41b1-bf62-259895057f79](https://www.usaid.gov/data/dataset/31fbe412-d87a-41b1-bf62-259895057f79)*.
- `hdi_human_development_index_hdig_value.jsonl`:
    - HDI from 1980 to 2013;
    - See more at *[https://data.humdata.org/dataset/human-development-index-hdi](https://data.humdata.org/dataset/human-development-index-hdi)*.
- `world_currencies_conversion_rates.csv`:
    - Dollar based conversion rates for world currencies from 1950 to 2017;
    - See more at *[https://data.oecd.org/conversion/exchange-rates.htm](https://data.oecd.org/conversion/exchange-rates.htm)*.

From the datasets above, the first two represent loans and guarantees USAID has issued since 1999, the third contains HDI indices and the fourth conversion rates across the globe. You must ingest this data into a PostgreSQL "data warehouse".

Create the tables you judge necessary and use the types and constraints best suitable for each pair.

### Data Processing

If you take a look at the dataset, you will see the data are not entirely normalized. Use the tool(s) you judge the best to solve the problem, but no overkill solutions (althought we suggest involving some Python here).

### Data Recovery

It is not expected too fancy analyses, but we are expecting that you may provide some insights about this data you just modeled into tables and had some effort to process. Although this challenge is aimed for data engineering, your most common client will be a data analyst. SQL is a good tool to use. Some questions we would like answered are:

*The HDI dataset shows the evolution from 1980 to 2013. It surely involves economy. Is it possible to make a correlation between a country/continent movement on the HDI index and the loans received through time?*

*Can you find a loan without a guarantee and vice versa?*

*Given the conversion rates, how much money each country received in it's local currency?*

Can you discover more interesting relations?

## Hints

- We use git;
- Your solution may be tested in a cloud environment (well... we use AWS for a matter of fact);
- Fancy patterns are not what we're going after, but some understanding of OOP principles would be nice;
- Please, do some level of automated deployment (even if it just involves some bash script creating a package with the needed files).

## Extras

Are you up for a new challenge?

- What if the files are updated on a daily basis? How would you ingest the new and modified records without having to create the tables in every run?
- Could you detach the data ingestion from source files? Are you able to ingest in "real time" using a Kafka stream? Define the event's payload and provide the code to process it.

## Our Stack

*This is purely informative. You don't need to know all of this.*

- AWS (Redshift, S3 and etc.);
- Airflow;
- Spark;
- Kafka (coming soon);
- Snowplow (we don't like this guy very much...).
