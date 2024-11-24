# Aiken-Lucid-Template

---



## Directory Structure
```
directory Structure
.
├── aikenbuild.sh                 # to build the Aiken validator and store script in compiled folder
├── aiken.toml                      # Aiken dependency
├── lib                                   # Aiken functions under this directory
├── validators                      # Aiken validators under this directory
│   └── first.ak
└── client                            # offchain
    ├── app
    │   ├── client.tsx
    │   ├── contract              # An example contract component
    │   │   ├── client.tsx
    │   │   ├── Contract.tsx
    │   │   └── page.tsx
    │   ├── Home.tsx
    │   ├── layout.tsx
    │   ├── mdx-components.tsx
    │   ├── page.tsx
    │   ├── providers.tsx
    │   └── README.mdx
    ├── components
    │   ├── compiled                # complied scripts will be stored here
    │   │   ├── spend.json        # example complied script
    │   │   └── Validators.ts     # exporting validator 
    │   ├── Dashboard.tsx
    │   ├── icons.tsx
    │   ├── navbar.tsx
    │   ├── primitives.ts
    │   └── WalletConnector
    │       ├── WalletClient.tsx
    │       └── WalletConnectors.tsx
    ├── config
    │   ├── emulator.ts           # Emulator Intialization
    │   ├── fonts.ts
    │   ├── lucid.ts                  # Lucid Intialization
    │   └── site.ts
    ├── package.json              # offchain code dependency
    ├── public
    │   └── favicon.ico
    ├── README.md
    ├── styles
    │   └── globals.css
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── .env.local                    # environment variables for offchain
    └── types
        ├── cardano.ts
        └── index.ts
```







---

## Steps to Work with the Project

1. **Write Validators**  
   Add your validator scripts under the `validators` directory.

2. **Utility Functions**  
   Add any utility functions required for validators under the `lib` directory.

3. **Build Validators**  
   Once you are done with creating or modifying validators, run the following command to build the scripts:
   ```bash
   ./aikenbuild.sh
   ```
   The compiled scripts will be stored in `client/components/compiled`.

4. **Off-Chain Integration**  
   Navigate to the `client` directory and start working on the off-chain code.

5. **Edit Validator Export**  
   Update `client/components/compiled/Validators.ts` to properly export your scripts for off-chain use.

6. **Import Validators**  
   - Import your validator into the `contract` directory.
   - Alternatively, you can create a new folder for additional contracts based on your requirements.

7. **Set Environment Variables**  
   Add the following environment variables in a `.env.local` file:
   ```env
   NEXT_PUBLIC_BF_URL=https://cardano-preprod.blockfrost.io/api/v0
   NEXT_PUBLIC_BF_PID=preprod.key....
   NEXT_PUBLIC_CARDANO_NETWORK=Preprod
   NEXT_PUBLIC_Emulator=false # Set to true for Emulator mode
   ```
   - You can use the Emulator instead of `Preview` or `Preprod` mode by setting `NEXT_PUBLIC_Emulator=true`.

8. **Deploy to Netlify**  
   - Go to [Netlify](https://netlify.com) and choose **Manual Deploy**.
   - Import your GitHub repository.
   - Configure the build settings:
     - **Build Directory**: `client/`
     - **Build Command**: `next build`
   - Add the environment variables and click **Deploy**.

---

This guide ensures proper organization and workflow for your project.