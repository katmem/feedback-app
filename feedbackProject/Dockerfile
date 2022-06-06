FROM python:3.8
ENV DockerHOME=/dockerTest
ENV PYTHONUNBUFFERED 1
RUN mkdir -p $DockerHOME
WORKDIR $DockerHOME
COPY . $DockerHOME
COPY ./requirements.txt $DockerHOME/requirements.txt
RUN pip install -r requirements.txt