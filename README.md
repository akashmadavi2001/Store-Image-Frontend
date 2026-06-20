# Store Frontend

The application uses ReactJS for the frontend and Spring Boot for the backend. Users can upload images through the React interface, and the image data is sent to the Spring Boot REST API. The backend processes the uploaded file and stores it in the database (or file system/cloud storage), while maintaining image metadata such as filename, content type, and storage path. When the application needs to display an image, ReactJS requests the image data from the Spring Boot API, which retrieves the stored image and sends it back to the client for rendering.

ReactJS (Image Upload)
          ↓
Spring Boot REST API
          ↓
Image Processing & Validation
          ↓
Database Storage (Image + Metadata)
          ↓
Image Retrieval API
          ↓
ReactJS (Display Image)


Product List: 

A product list is a document or database that catalogs a company’s entire portfolio of goods or services, organizing details such as product names, unique identifiers, costs, inventory status, and sales history.

<img width="1155" height="510" alt="Image" src="https://github.com/user-attachments/assets/ae19d32b-ea05-44c4-b7ec-6ec52ab51079" />

View Section:

The Page Information view for a page shows you useful information about the page. Product Detail Page (PDP) is a dedicated webpage that provides in-depth information about a single product to drive conversions.

<img width="625" height="770" alt="Image" src="https://github.com/user-attachments/assets/9941ae51-2756-4d73-a21c-3e4972c9158a" />

Add Section:

"Add section" functionality varies significantly by platform, as the term applies to document formatting, web design, learning management systems, and form building.

<img width="950" height="845" alt="Image" src="https://github.com/user-attachments/assets/c410dd9d-60c9-4070-913c-d6447edc50cd" />

Update Section:

The term update section refers to distinct features or processes depending on the specific platform or context.

<img width="995" height="895" alt="Image" src="https://github.com/user-attachments/assets/80d9910c-35f3-49ba-a53c-23dea555fb8e" />
