venv\Scripts\activate
pip install --upgrade pip
pip install -r requirements.txt
reflex init
reflex export --frontend-only
mkdir public
move C:\Users\usuario\proyects\git\my_web\frontend.zip C:\Users\usuario\proyects\git\my_web\public
cd public
tar -xvf frontend.zip
del frontend.zip
cd..
deactivate