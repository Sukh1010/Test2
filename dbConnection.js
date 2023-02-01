import mongoose from "mongoose";

function connectDb() {
  mongoose
    .connect(
      "mongodb+srv://Sukh99:mongodb@cluster0.qeqp1.mongodb.net/Test2?retryWrites=true&w=majority"
    )
    .then((res) => console.log("MongoDB is Connected"));
}

export default connectDb;
