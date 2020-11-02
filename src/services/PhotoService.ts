import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { FilePath } from '@ionic-native/file-path';
import { Chooser, ChooserResult } from '@ionic-native/chooser';
import { Platform } from 'ionic-angular';
import { File, IWriteOptions } from '@ionic-native/file';


@Injectable()
export class PhotoService {
    constructor(private camera: Camera, 
                private imagePicker: ImagePicker, 
                private filePath: FilePath,
                private chooser :Chooser,
                private platform:Platform,
                private file: File
               ) { }

    async takePicture() {
       
        
        try{
            const options: CameraOptions = {
                quality: 65,
                destinationType: this.camera.DestinationType.FILE_URI,
                sourceType: this.camera.PictureSourceType.CAMERA,
                encodingType: this.camera.EncodingType.JPEG,
            }
            const tempImagePath = await this.camera.getPicture(options);
            const tempFilename = tempImagePath.substr(tempImagePath.lastIndexOf('/') + 1);
             let result = { path: tempImagePath, fileName: tempFilename }
            return result;
        }catch(e)
        {
          return {error: e};
        }

    }


    removePhoto(path:string)
    {

    }

    moveToGallery(path:string)
    {
        
    }

    async openGallery()
    {

      try{
        const options: ImagePickerOptions = {
            maximumImagesCount: 1,
            quality: 85,
            outputType: 0,
        };
        let result = await this.imagePicker.getPictures(options);
        if (result.length == 0) return null;
        let response : FilesResponsePhoto[] = new Array();
        for (let i = 0; i <= result.length -1; i++)
        {
            var dto = new FilesResponsePhoto();
            dto.path = result[i];
            dto.fileName = result[i].substr(result[i].lastIndexOf('/') + 1);
            response.push(dto);
        }
        return response;
      }catch(err){
          return { error: err };
      }
    }

    async openDirectory()
    {
       try
       {

         let result = await this.chooser.getFile('application/pdf') as ChooserResult;
         if(result == undefined) return null;
        
        let fileName = result.name;
        let checkExt = fileName.split('.')[1];
        if(checkExt.toLowerCase() !== 'pdf') return null;
        let pathPdf : string;
        if(this.platform.is('android')){
          pathPdf= await  this.filePath.resolveNativePath(result.uri);
        }else{
          let appFolder =  this.file.cacheDirectory;
          console.log("app directory",appFolder);
          let dataFile = new Blob([result.data]);
          this.writeFileIos(appFolder,result.name,dataFile);
          pathPdf = appFolder,result.name;
        }
        let response = { path: pathPdf , fileName: fileName };
        console.log('pdf dir', response);
        return response;
       }catch(e){
           return { error: e };
       }

    }

    async openFileType(type: FileType)
    {
      let content = this.getContentType(type);
        try {

            let result = await this.chooser.getFile(content) as ChooserResult;
            if (result == undefined) return null;

            let fileName = result.name;
           let pathFile:string; 

           if(this.platform.is('android')){
            pathFile= await  this.filePath.resolveNativePath(result.uri);
          }else{
            let appFolder =  this.file.cacheDirectory ;
            console.log("app directory",appFolder)
            let dataFile = new Blob([result.data]);
            this.writeFileIos(appFolder,result.name,dataFile);
            pathFile = appFolder,result.name;
          }
            let response = { path: pathFile , fileName: fileName }
             console.log('file dir', response);
            return response;
        } catch (e) {
            return { error: e };
        }
    }


    private writeFileIos(pathDir:string,fileName:string,data:Blob){
        console.log("path: -------- ",pathDir)
      /*  if(!this.file.checkDir(this.file.applicationStorageDirectory,"documents"))
        {
            this.file.createDir(this.file.applicationStorageDirectory,"documents",true);
            console.log("directorio documents creado")
        }*/
       

        let options : IWriteOptions = {
            replace:true
        }
        this.file.writeFile(pathDir,fileName,data,options).then(()=>{
            console.log("escritura exitosa")
        }).catch(ex=>{
            console.log("Error escribiendo archivo", ex)
            throw ex;
         })
    }


    private getContentType(type: FileType)
    {
        let content = 'image/jpg';
        switch(type){
            case FileType.Audio:
                content ='.mp3,audio/*'
                break;
            case FileType.Video:
                content = 'video/*,.mov'
                
                break;
            case FileType.Image:
                content = 'image/jpg'
                
                break;
            case FileType.Pdf:
                content = 'application/pdf'
                break
            default:
                content = "image/jpg";
                break;

        }
        return content;
    }

    getFileContent(type: FileType) {
        let content = 1;
        switch (type) {
            case FileType.Audio:
                content = 4;
                break;
            case FileType.Video:
                content = 2

                break;
            case FileType.Image:
                content = 1

                break;
            case FileType.Pdf:
                content = 3
                break
            default:
                content = 1
                break;

        }
        return content;
    }
}

export class FilesResponsePhoto {
    path : string;
    fileName: string;
}

export enum FileType {
    Video,
    Audio,
    Image,
    Pdf
}