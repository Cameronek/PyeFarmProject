## NOTE THAT IN THE CURRENT FINALIZED VERSION OF THE PROJECT, THE WEB APPLICATION CANNOT BE RAN WITHOUT THE APPROPRIATE HARDWARE
If you have any questions about this project, please contact cameronek@mun.ca, or the email of another team member.

## Team members

- Cameron King
- Luke Billard
- Jumanah Babar
- Andrew O'brien
- Aaron Greenland

---
---

## Setup

---

### Initial Configuration

__STRONGLY RECOMMENDED creating a virtual environment by doing:__

1. ``py -m venv PyeFarm``

- In order to "activate" the virtual environment

2. __optional:__ ``Set-ExecutionPolicy RemoteSigned -Scope CurrentUser``
    - may be required for computers using Windows

3. run:

- ``PyeFarm\Scripts\activate (Windows)``
OR
``source PyeFarm/bin/activate``

- Now, you should be in the virtual environment.

4. Make sure you have python 3.12 installed and then download dependencies contained in the requirements file

- ``pip install -r requirements.txt``
  - __(Do this while in the virtual environment)__

---

### Node Modules install

1. ``cd frontend``

2. ``npm i``

- (I already had node installed so this might cause problems, not sure)

---

### To run webapp

1. ``python3 manage.py runserver``

- Running without ``python3`` has resulted in an import error for Django before

---

### To compile frontend:

1. ``npm run dev``

- Will also likely need to install css-loader 
  - ``npm install --save-dev css-loader``

- __If MaterialUI is not working for you, try the following__
- 1. ``npm install @mui/material @mui/styled-engine-sc styled-components``
- 2. ``npm install @mui/icons-material``
- 3. ``npm install @fontsource/roboto``


# PyeFarmProject

NOTE THAT PROJECT HAS 3 MAIN SECTIONS, SEPARATED BY FOLDERS
-- Frontend (frontend development) 
-- Monitoring (for api)
-- PyeFarmProject (mostly configuration)

