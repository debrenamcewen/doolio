CREATE TABLE "Tasks" (
"TaskID"  SERIAL ,
"Name" VARCHAR(100) ,
"DateStart" DATE ,
"DateEnd" DATE ,
"TimeStart" TIME ,
"TimeEnd" TIME ,
"Complete" BOOLEAN NOT NULL DEFAULT '0' ,
"ProjectID_Projects" INTEGER ,
PRIMARY KEY ("TaskID")
);

CREATE TABLE "Users" (
"UserID"  SERIAL ,
"UserName" VARCHAR(50) NOT NULL ,
"Email" VARCHAR(50) NOT NULL ,
"Password" VARCHAR(50) NOT NULL DEFAULT '123456789' ,
PRIMARY KEY ("UserID")
);

CREATE TABLE "Projects" (
"ProjectID"  SERIAL ,
"Name" VARCHAR(50) NOT NULL ,
"UserID_Users" INTEGER ,
PRIMARY KEY ("ProjectID")
);

ALTER TABLE "Tasks" ADD FOREIGN KEY ("ProjectID_Projects") REFERENCES "Projects" ("ProjectID");
ALTER TABLE "Projects" ADD FOREIGN KEY ("UserID_Users") REFERENCES "Users" ("UserID");
