export interface Task {
  id: number;
  nome: string;
  estado: Estado;
}

export enum Estado {
  naoiniciado = 0,
  iniciado = 1,
  finalizado = 2,
}
