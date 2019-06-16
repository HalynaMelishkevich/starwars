FROM node:10
RUN mkdir /home/starwars
COPY . /home/starwars
WORKDIR /home/starwars
RUN chmod +x /home/starwars/run_script.sh
CMD /home/starwars/run_script.sh