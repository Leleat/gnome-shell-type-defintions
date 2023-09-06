import Shell from 'gi://Shell';

declare global {
    const global: Shell.Global;
    const log: (...data: unknown[]) => void;
}
