import * as dotenv from "dotenv";
dotenv.config();

// ENV variables
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: "postgres",
  password: "postgres",
  database: "database-2",
  host: "database-2.czcz8c2ioal5.us-east-1.rds.amazonaws.com",
  aws_region: "",
  aws_profile: "",
  aws_media_bucket: "arn:aws:s3:::myawsbucket-185756520407",
  url: "http://localhost:8080",
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
