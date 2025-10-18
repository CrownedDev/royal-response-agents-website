// types/voiceflow.d.ts - CREATE THIS FILE IN YOUR PROJECT

interface VoiceflowConfig {
  verify: { projectID: string };
  url: string;
  versionID: string;
  autostart?: boolean;
  render?: {
    mode?: string;
    position?: string;
  };
  launch?: {
    event?: string;
  };
}

interface Window {
  voiceflow?: {
    chat: {
      load: (config: VoiceflowConfig) => Promise<void>;
      open: () => void;
      close: () => void;
      isOpen?: boolean;
      on: (event: string, callback: () => void) => void;
      state?: {
        user?: {
          userID: string;
        };
      };
    };
  };
  voiceflowProspectID?: string;
}