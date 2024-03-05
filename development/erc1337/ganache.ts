import { Ganache } from "../../test/e2e/ganache";

async function main() {
  new Ganache().start({
    hardFork: 'london',
    port: 8545,
    verbose: true,
    vmErrorsOnRPCResponse: true,
    quiet: false,
  });
}

main();