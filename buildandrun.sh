cd dashboard
ng build
rm -rf ../public/*.*
cp -r dist/*.* ../public
cd ..
npm start $1
