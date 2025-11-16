import { api } from '@/lib/api/axiosInstance';
import type { GetMyLoansResponse } from '@/types/Loans.type';

const prefix = '/api/loans';

// Get My Loans
export async function getMyLoans() {
  const res = await api.get<GetMyLoansResponse>(`${prefix}/my`);
  return res.data;
}
