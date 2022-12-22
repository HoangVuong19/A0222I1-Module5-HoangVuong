import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contract} from '../model/Contract';

const API_URL = 'http://localhost:3000/contracts';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) {
  }

  getAllContracts(): Observable<Contract[]> {
    return this.http.get<Contract[]>(API_URL);
  }

  saveContract(contract): Observable<Contract> {
    return this.http.post<Contract>(API_URL, contract);
  }

  findById(id: number): Observable<Contract> {
    return this.http.get<Contract>(`${API_URL}/${id}`);
  }

  updateContract(id: number, contract: Contract): Observable<Contract> {
    return this.http.put<Contract>(`${API_URL}/${id}`, contract);
  }

  deleteContract(id: number): Observable<Contract> {
    return this.http.delete<Contract>(`${API_URL}/${id}`);
  }
}
