use aiken/crypto.{Script, VerificationKeyHash}
use cardano/address.{Address}
use cardano/assets.{Lovelace}

pub type ScriptDatum {
  developer: Address,
  document: Script,
  fees: Lovelace,
}

pub type Action =
  Int

pub type ConfigDatum {
  fees_address: Address,
  fees: Lovelace,
  spend_address: Address,
  multisig_validator_group: List<VerificationKeyHash>,
  multisig_refutxoupdate: List<VerificationKeyHash>,
}
