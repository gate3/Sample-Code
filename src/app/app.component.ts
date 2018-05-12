import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as GeoFire from "geofire";
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private lat: number;
    private lng: number;
    private subscription: any;
    private eventSub:any;
    loading:boolean = true
    locations:any = []
    private dbRef: AngularFireList<any>;
    private geoFire: any;
    private userList:AngularFireList<any>;

    constructor (private db: AngularFireDatabase){
        this.dbRef = this.db.list('/locations');
        this.userList = this.db.list('/users')
        this.geoFire = new GeoFire(this.dbRef.query.ref);

        this.getUserLocation()
    }

    /// Queries database for nearby locations
    /// Maps results to the hits BehaviorSubject
    getLocations(radius: number, coords: Array<number>) {
        this.geoFire.query({
            center: coords,
            radius: radius
        })
        .on('key_entered', (userKey, location, distance) => {
            
            const u = this.userList.query.ref
                          .child(`/${userKey}`)
                          .on('value',s=>{
                            const {name, address} = s.val()
                            
                            let hit = {
                                location,
                                distance,
                                name,
                                address,
                                userKey
                            }
                            this.locations = hit
                            console.log(`fetched locations`, this.locations)
                          })
        })
    }

    private getUserLocation() {
      console.log(`getting user locaion`)

        window.navigator.geolocation
            .watchPosition(position=>{
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;

                console.log(`gotten location`,position)

                this.getLocations(100, [this.lat, this.lng])
            })
    }

    trackByFn (index, item) {
        return item.userKey
    }

}
