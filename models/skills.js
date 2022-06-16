import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillSchema = new Schema({
  skill: String,
  falogo: String,
})

const Skill = mongoose.model('Skill',
skillSchema)

export {
  Skill
}