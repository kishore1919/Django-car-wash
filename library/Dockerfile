# import the python image from Docker hub
FROM python:3.10.0b2
# for Log purpose
ENV PYTHONUNBUFFERED = 1
# create a work directory
WORKDIR /app
# adding the local files to container
ADD . /app
# Installing the requirements.txt
RUN pip install -r requirements.txt


