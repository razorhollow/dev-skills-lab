import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillSchema = new Schema({
  name: String,
  url: String,
  falogo: String,
})

const Skill = mongoose.model('Skill',
skillSchema)

export {
  Skill
}