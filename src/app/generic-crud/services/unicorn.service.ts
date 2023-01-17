import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Unicorn } from "../models/unicorn.model";
import { ResourceService } from "./resource.service";

@Injectable({ providedIn: "root" })
export class UnicornsService extends ResourceService<Unicorn> {
  constructor(private http: HttpClient) {
    super(
      http,
      Unicorn,
      // SEE: https://crudcrud.com/
      `https://localhost:44382/api/apples`
    );
  }
}
