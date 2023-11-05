## Udagram Infrastructure

![Architecture](architecture.png)

### AWS
#### RDS Postgres
The application server uses AWS RDS Postgres as database for storing and retrieving information.

Database URI: `postgresql://postgres:postgres@udagramdb.cpmbomf1vmkr.us-east-1.rds.amazonaws.com/postgres`

#### Elastic Beanstalk
The application server is deployed on AWS Elastic Beanstalk service. The application is build, archived and uploaded
to and S3 bucket from where Elastic Beanstalk extracts and runs the application on an endpoint.

EB URL: `http://udagram-api.us-east-1.elasticbeanstalk.com/`

#### S3 Bucket
The frontend application is deployed using AWS S3 Bucket. The bundled assets are uploaded to an S3 bucket and that
bucket is made publicly readable.

Bucket URL: `http://udagram-fe.s3-website-us-east-1.amazonaws.com/home`

End users can access the application from the Bucket URL.
