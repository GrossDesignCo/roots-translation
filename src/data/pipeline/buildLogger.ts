const verbose = process.argv.includes('--verbose');

export interface BuildLogger {
  phase(stepNumber: number, totalSteps: number, name: string): void;
  item(msg: string): void;
  summary(msg: string): void;
  warn(msg: string): void;
  error(msg: string, err?: unknown): void;
  done(totalMs: number): void;
}

export function createBuildLogger(): BuildLogger {
  return {
    phase(stepNumber, totalSteps, name) {
      if (stepNumber > 1) console.log();
      console.log(`[${stepNumber}/${totalSteps}] ${name}`);
    },

    item(msg) {
      if (verbose) console.log(`     ${msg}`);
    },

    summary(msg) {
      console.log(`  ✓ ${msg}`);
    },

    warn(msg) {
      console.log(`  ⚠  ${msg}`);
    },

    error(msg, err?) {
      console.error(`  ✗  ${msg}`);
      if (err && verbose) {
        console.error(err);
      }
    },

    done(totalMs) {
      const seconds = (totalMs / 1000).toFixed(1);
      console.log(`\nData build complete in ${seconds}s`);
    },
  };
}

export function createSilentLogger(): BuildLogger {
  return {
    phase() {},
    item() {},
    summary() {},
    warn() {},
    error() {},
    done() {},
  };
}
