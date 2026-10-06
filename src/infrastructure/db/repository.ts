import { client } from "./client.js";
import { ClientRepository } from "../../domain/contracts/repositoryContract.js";
import { SurveyAnswer } from "../../domain/DTO/requestResponse.js";

export class Repository implements ClientRepository{
        public async registerQuestion(bodyRequest: SurveyAnswer): Promise<void> {
            try {
                const query = `
                    INSERT INTO answers 
                    WHERE id = $1}
                    RETURNING *
                `;

                const {id, questionId, option} = bodyRequest;

                const params = [id, questionId, option];

                const result = await client.query(query, params);

                return result.rows[0];
            } catch (error) {
                throw new Error("Failed to insert")
            }
        }
}