declare namespace Api {
  export interface User {
    id: number;
    name: string;
  };

  export interface Project {
    id: number;
    name: string;
    personId: number;
    organization: string;
  };
}
