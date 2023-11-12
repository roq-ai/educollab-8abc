import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EducationalContentInterface {
  id?: string;
  title: string;
  description?: string;
  subject: string;
  grade_level: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface EducationalContentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  subject?: string;
  user_id?: string;
}
