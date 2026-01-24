import { Workflow } from './workflow.types';

export function getWorkflowById(
  workflows: Workflow[],
  id: string
): Workflow | undefined {
  return workflows.find(workflow => workflow.id === id);
}
