import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'

function RichTextEditor({
  description = '',
  descriptionErrorMsg = '',
  setDescription = () => {},
  setDescriptionErrorMsg = () => {},
}) {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={description}
        onChange={(event, editor) => {
          const data = editor.getData()
          setDescription(data)
          setDescriptionErrorMsg('')
        }}
        config={{
          toolbar,
        }}
      />
      {descriptionErrorMsg && (
        <p className="text-red-500 mt-[7px]">{descriptionErrorMsg}</p>
      )}
    </div>
  )
}

export default RichTextEditor

const toolbar = [
  'heading',
  '|',
  'undo',
  'redo',
  'bold',
  'italic',
  'link',
  'codeblock',
  'bulletedList',
  'numberedList',
  'blockQuote',
  'insertTable',
  'indent',
  'outdent',
]
