import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the ottr-force-save-labextension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'ottr-force-save-labextension:plugin',
  description: 'A JupyterLab extension for force-saving notebooks from ottr, the Otter-Grader R client.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension ottr-force-save-labextension is activated!');
  }
};

export default plugin;
