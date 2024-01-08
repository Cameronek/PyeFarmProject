STRONGLY RECCOMEND creating a virtual environment by doing

py -m venv PyeFarm

In order to "activate" the virtual environment,

To do the next step, you may have to run 
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

Next, run
PyeFarm\Scripts\activate (Windows)
OR
source PyeFarm/bin/activate

Now, you should be in the virtual environment.

Make sure you have python 3.12 installed and then download dependencies contained in the requirements file

pip install -r requirements.txt (Do this while in the virtual environment)

Node Modules install:
cd frontend
npm i
(I already had node installed so this might cause problems, not sure)

To run webapp:
python manage.py runserver 

To compile frontend:
npm run dev


* If MaterialUI is not working for you, try the following
npm install @mui/material @mui/styled-engine-sc styled-components
npm install @mui/icons-material
npm install @fontsource/roboto