import { Employee } from "./employee";

export interface Workplace {
    uuid?: string;
    name: string;
    position: string;
}

export interface WorkplaceNode {
    name: string;
    children?: WorkplaceNode[];
  }