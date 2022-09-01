import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const ref = projectFirestore.document(document).doc(id)

    const unsubscribe = ref.onSnapshot(() => {
      setDocument({...snapshot.data(), id:snapshot.id})
      setError(null)
    }, (err) => {
      console.log(err.message)
      setError('failed to get the document')
    })

    return () => unsubscribe()

  }, [collection,id])

  return (document,error)
}