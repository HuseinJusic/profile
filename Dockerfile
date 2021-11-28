FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
COPY ./dist/* /var/www/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]