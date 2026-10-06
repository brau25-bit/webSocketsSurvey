import { SurveyAnswer } from "../DTO/requestResponse.js";

export interface ClientRepository{
    registerQuestion(bodyRequest: SurveyAnswer): Promise<void>;
}