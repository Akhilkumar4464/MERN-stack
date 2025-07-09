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



export async function getNoteById(req, res) {
  try {
    // Check if ID parameter exists
    

    // Check if ID is a valid MongoDB ObjectId
    

    const note = await Note.findById(req.params.id);
    
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(note);
    
  } catch (error) {
    console.error("Error in getNoteById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}










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
export async function Deletenotes(req, res) {
  try {
    const deletenote = await Note.findByIdAndDelete(req.params.id);

    if (!deletenote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
    
  } catch (error) {
    console.error("Error in delete controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
