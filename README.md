# guruappThis is node todo app with jwt authentication.

#setUp project on locals

pass command npm install
pass command node index.js
or npm run dev
setUp your own database URL
APIs Paths
for user sign-up a. http://localhost:7000/user/create [for register user]---POST Request Screenshot 2023-06-03 204210 b. http://localhost:7000/user/sign-in [for log in user with jwt authentication]---POST Request Screenshot 2023-06-03 204903 c. http://localhost:8000/todo/create [for creating todo with jwt authentication]---POST Request Screenshot 2023-06-03 205140 d. http://localhost:8000/todo/get-todo [for getting all todos by logged-in user via jwt authentication] GET Request Screenshot 2023-06-03 205515 e. http://localhost:8000/todo/:id/update_status/:status_id [for updating status of todo ] PUT Request Screenshot 2023-06-03 210351 f. http://localhost:8000/todo/update_data/:id [for updating data of tods] PUT Request Screenshot 2023-06-03 210850 g. http://localhost:8000/todo/:id/delete_item [for deleting item by jwt authentication] image h. http://localhost:8000/todo/filter_task/:status [filter task by status ] image
api testing 
1.for user sign-up a. http://localhost:7000/user/create [for register user]---POST Request
2. http://localhost:7000/user/sign-in [for log in user with jwt authentication]---POST Request
3. http://localhost:7000/todo/create [for creating todo with jwt authentication]---POST Request
4. . http://localhost:7000/todo/get-todo [for getting all todos by logged-in user via jwt authentication] GET Request
5.  http://localhost:7000/todo/:id/update_status/:status_id [for updating status of todo ] PUT Request
6.   http://localhost:7000/todo/update_data/:id [for updating data of tods] PUT Request
7.   http://localhost:7000/todo/:id/delete_item [for deleting item by jwt authentication]
8.   http://localhost:7000/todo/:id/delete_item [for deleting item by jwt authentication]
