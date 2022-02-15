declare namespace Api {
  export interface User {
    id: number;
    name: string;
    token: string;
    email: string;
    title: string;
    organization: string;
  };

  export interface Project {
    id: number;
    name: string;
    personId: number;
    organization: string;
  };
}
