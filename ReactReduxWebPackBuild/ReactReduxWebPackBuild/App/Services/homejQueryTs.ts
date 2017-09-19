//Warning this file was dynamicly created.
//Please don't change any code it will be overwritten next time the template is executed.
//Created on 19.09.2017 time 19:26 from squad.

 
export interface IhomejQueryTs { 
     getUser(age: number) : JQueryPromise<ReactReduxWebPackBuild.Models.IUser>;
 }

export class homejQueryTs implements IhomejQueryTs {

    public getUser(age: number) : JQueryPromise<ReactReduxWebPackBuild.Models.IUser> { 
       return jQuery.get('Home/GetUser'+ '?age='+age).then((result: ReactReduxWebPackBuild.Models.IUser) : ReactReduxWebPackBuild.Models.IUser => { return result; });
    } 

 
  }

