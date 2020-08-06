import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 4UMNneVovjp0l3NV6FiusvtmuiZVHSYWqZODiJ8UQgw9l7Kq2GzZTXKXjxwnOsDoI6c6HPCj7ft9JPAWGaDweblqc6y5OJBbarNWYWY4TBXMIY6YPYMaGH_M1wosX3Yx'
    }
});