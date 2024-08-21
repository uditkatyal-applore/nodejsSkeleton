import { ILogProvider } from "../../../application/shared/log/providerContracts/ILogProvider";
import messageResources, { Resources } from "../../../application/shared/locals/messages";
import { ApplicationStatus } from "../../../application/shared/status/applicationStatus";
export { ApplicationError } from "../../../application/shared/errors/ApplicationError";
import { Validator } from "validator-tsk";
import mapper, { IMap } from "mapper-tsk";
export { Result } from "result-tsk";

export abstract class BaseProvider {
  constructor(readonly logProvider: ILogProvider) {
    this.mapper = mapper;
    this.appMessages = messageResources;
    this.validator = new Validator(
      messageResources,
      messageResources.keys.SOME_PARAMETERS_ARE_MISSING,
      ApplicationStatus.INVALID_INPUT,
    );
  }

  mapper: IMap;
  validator: Validator;
  appMessages: Resources;
  applicationStatusCode = ApplicationStatus;
}
