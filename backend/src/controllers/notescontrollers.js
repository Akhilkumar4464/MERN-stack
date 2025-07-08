 import Note from '../models/Note.js'

 export async function   GetAllnotes  (req, res)  {
   try {
         const notes = await Note.find()

         res.status(200).json(notes)

   }
    catch (error) {
      console.error( " Error in GetAllnotes controller", error)
       res.status(500).json({ massage :" internal server error "})
    }
};
export  async function Createnotes(req, res) {

   try {
      const {title , Content } = req.body
      console.log( title, Content )

      const newNote = new Note({ title : title , Content : Content});

      await newNote.save()
      res.status(200).json({massage:" note create succesfully "})
   } catch (error) {
    console.error(" errror in createnotes controller", error)
     res.status(500).json({massage:" internal server error"})
   }
  
}; 
export  async function Updatenotes(req, res) {
  try {
     const  { title, Content} = req.body
     await Note.findByIdAndUpdate(req.params.id , { title, Content})
      res.status(200).json({massage:" note update successfully "})

  } catch ( error) {
    console.error(" errror in update controller", error)
     res.status(500).json({massage:" internal server error"})
    
  }
};
export  async function Deletenotes(req, res)  {
  res.status(200).json({ message: "note deleted successfully" });
};
