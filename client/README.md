# REST API Documentation

## Endpoints

### GET /items
- Description: Retrieve all items.
- Response:
  ```json
  [
      { "id": "1", "name": "Item 1" },
      { "id": "2", "name": "Item 2" }
  ]
  ```

### POST /items
- Description: Create a new item.
- Request Body:
  ```json
  {
      "id": "3",
      "name": "Item 3"
  }
  ```
- Response:
  ```json
  {
      "id": "3",
      "name": "Item 3"
  }
  ```

### GET /items/:id
- Description: Retrieve a single item by ID.
- Response:
  ```json
  {
      "id": "1",
      "name": "Item 1"
  }
  ```

### DELETE /items/:id
- Description: Delete an item by ID.
- Response: 204 No Content