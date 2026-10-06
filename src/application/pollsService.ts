import { ClientRepository } from "../domain/contracts/repositoryContract.js";
import { SurveyAnswer } from "../domain/DTO/requestResponse.js";

export class RegisterAnswer{
    constructor(
        private repository: ClientRepository
    ){}

    public async execute(body: SurveyAnswer){
        try {
            await this.repository.registerQuestion(body);
        } catch (error) {
            throw new Error("Failed to connect do DB");
        }
    }
}