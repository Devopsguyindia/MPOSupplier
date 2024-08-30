import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@haifahrul/ckeditor5-build-rich';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  selectedImage: File | null = null;
  description: string = '';
  imagePreview: string | ArrayBuffer | null = null;

  editor = ClassicEditor;
  customColorPalette = [
    {
      color: '#E64C4C',
      label: 'Red',
    },
    {
      color: '#E6994C',
      label: 'Orange',
    },
    {
      color: '#E6E64C',
      label: 'yellow',
    },

    // ...
  ];
  data: any = ``;
  config = {
    toolbar: [
      'undo',
      'redo',
      '|',
      'heading',
      'fontFamily',
      'fontSize',
      '|',
      'bold',
      'italic',
      'underline',
      'fontColor',
      'fontBackgroundColor',
      'highlight',
      '|',
      'link',
      'CKFinder',
      'imageUpload',
      'mediaEmbed',
      '|',
      'alignment',
      'bulletedList',
      'numberedList',
      '|',
      'indent',
      'outdent',
      '|',
      'insertTable',
      'blockQuote',
      'specialCharacters',
    ],
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        'tableProperties',
        'tableCellProperties',
      ],
      tableProperties: {
        borderColors: this.customColorPalette,
        backgroundColors: this.customColorPalette,
        defaultProperties: {
          borderStyle: 'dashed',
          borderColor: 'hsl(90, 75%, 60%)',
          borderWidth: '3px',
          alignment: 'left',
          width: '100px',
          height: '100px',
        },
      },
      tableCellProperties: {
        borderColors: this.customColorPalette,
        backgroundColors: this.customColorPalette,
        defaultProperties: {
          horizontalAlignment: 'center',
          verticalAlignment: 'bottom',
          padding: '10px',
        },
      },
    },

    fontColor: {
      colors: [
        {
          color: '#E64C4C',
          label: 'Red',
        },
        {
          color: '#E6994C',
          label: 'Orange',
        },
        {
          color: '#E6E64C',
          label: 'Yellow',
        },
      ],
    },

    language: 'id',
    image: {
      toolbar: ['imageTextAlternative', 'imageStyle:full', 'imageStyle:side'],
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedImage = event.target.files[0];

      // Create a FileReader to read the file and create a preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(this.selectedImage);
    }
  }

  uploadImage() {
    if (this.selectedImage) {
      // Handle the image upload logic here
      console.log('Image uploaded:', this.selectedImage);
    }
  }

  removeImage() {
    this.selectedImage = null;
    this.imagePreview = null; // Clear the image preview
  }

}
