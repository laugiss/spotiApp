// tslint:disable-next-line:import-spacing
import { HttpClient }  from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
   }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBb6GM4pjgwtgaHizpVy8gYEOQPGMeCXE_AN6rA1-kowocjuBPmUX1oq7p-5xvumGCeECC_ce71KIGIGvA'
    });

    this.http.get('	https://api.spotify.com/v1/browse/new-releases', {headers})
    .subscribe(data => {
      console.log(data);
    });
}

}
