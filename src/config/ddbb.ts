import mongoose from "mongoose"
const connectDB = async (callback: Function) => {
    await mongoose.connect("", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    })
        .then((s) => {
            console.log("database connect")
            callback()
        })
}
export default connectDB