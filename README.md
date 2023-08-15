# Midterm GIGIH 3.0

## How to run
Before you run the project, make sure to complete .env file such as `PORT`, `HOST` and `MONGODB_URI`. <br>
You can populate the database using this command
```
npm run seed:all
```

You can use this command to run:
```
npm run start:dev
```
or for production
```
npm run start
```

## Database Structure
Collections:
1. Videos: store videos data
```
// videos model
{

  _id: String,
  title: String,
  description: String,
  thumbnails: {
    default: {
      url: String,
      width: Number,
      height: Number,
    },
    medium: {
      url: String,
      width: Number,
      height: Number,
    },
    high: {
      url: String,
      width: Number,
      height: Number,
    },
    standard: {
      url: String,
      width: Number,
      height: Number,
    },
    maxres: {
      url: String,
      width: Number,
      height: Number,
    }
  }
}
```
2. Comments: store comments of every user on specific videos
```
// comments model
{
  name: String,
  body: String,
  videoId: String,
  imageUrl: String,
}
```
3. Products -> store products
```
// products model
{
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
}
```
see more on: `infrastructures\database\mongoDB\models`

## API Structure
The api structure based on api minimum requirment. I also tried to implement clean architectur on this project.

#Vidoes
- Video object
```
{
  id: string
  title: string
  thumbnails: string
  description: string
}
```
### GET /v1/videos
Return list of videos.
- URL Params <br>
None
- Data Params <br>
None
- Headers <br>
Content-Type: application/json
- Success Response:
- Code: 200 <br>
Content:
```
{
  status: 'success',
  videos: [
    {<video_object>},
    {<video_object>},
    {<video_object>}
  ]
}
```

### GET /v1/videos/:id
Return video detail.
- URL Params <br>
Required: id=[string]
- Data Params <br>
None
- Headers <br>
Content-Type: application/json
- Success Response:
- Code: 200 <br>
Content:
```
{
  status: 'success',
  video: {<video_object>}
}
```

#Products
- Product object
```
{
  id: mongoDB id object
  title: string
  thumbnails: string
  description: string
  price: number
}
```
### GET /v1/products
Return list of products.
- URL Params <br>
None
- Data Params <br>
None
- Headers <br>
Content-Type: application/json
- Success Response:
- Code: 200 <br>
Content:
```
{
  status: 'success',
  products: [
    {<product_object>},
    {<product_object>},
    {<product_object>}
  ]
}
```

#Comments
- Comment object
```
{
  id: mongoDB id object
  name: string
  body: string
  videoId: string
  imageUrl: string
  createdAt: datetime(iso 8601)
}
```
### GET /v1/comments/:id
Return list of comments of a specific vidoe.
- URL Params <br>
  Required: id=[string] (video id)
- Data Params <br>
None
- Headers <br>
Content-Type: application/json
- Success Response:
- Code: 200 <br>
Content:
```
{
  status: 'success',
  comments: [
    {<comment_object>},
    {<comment_object>},
    {<comment_object>}
  ]
}
```

### POST /v1/comments/:id
Create a comment of a specific vidoe.
- URL Params <br>
  Required: id=[string] (video id)
- Data Params <br>
None
- Headers <br>
Content-Type: application/json
- Success Response:
- Code: 200 <br>
Content:
```
{
  status: 'success',
}
```

## Next update (I hope)
- [ ] Make this readme very clear and easy to understand
- [ ] Learn more about clean architecture and test driven development for API
- [ ] Add authentication and authorization feature.