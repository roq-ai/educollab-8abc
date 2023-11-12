import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FreelanceEducatorInterface {
  id?: string;
  user_id: string;
  expertise: string;
  experience_years: number;
  education_level: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface FreelanceEducatorGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  expertise?: string;
  education_level?: string;
}
