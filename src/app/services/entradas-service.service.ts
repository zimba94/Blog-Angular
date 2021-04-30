import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Entrada } from '../interfaces/interfaces';

// const apiKey = environment.apiKey;
const baseUrl = environment.baseUrl;
const headers = new HttpHeaders({
  // 'X-Api-key': apiKey
  'Content-Type':  'application/json; charset = utf-8'
});


@Injectable({
  providedIn: 'root'
})
export class EntradasServiceService {

  headlinesPage=0;
  public cargando: boolean = false;

  

  constructor(private http: HttpClient) { }



  private ejecutarQuery<T>(query: string){
    query = baseUrl + query;
    return this.http.get<T>(query, {headers});
  }

  getEntradas(){
    console.log("get entradas");
    this.headlinesPage++;
    console.log('headers');
    console.log(headers);
    return this.ejecutarQuery<Entrada[]>(`/entrada`);
  }

  editarEntrada(){

  }

  resetPage() {
    this.headlinesPage=0;
  }

}