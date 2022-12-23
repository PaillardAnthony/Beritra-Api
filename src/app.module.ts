import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { getConnectionOptions } from "typeorm";
import { AccountsModule } from "./resources/accounts/accounts.module";
import { AuthenticationMiddleware } from "./middleware/authentication.middleware";
import { PlayersModule } from "./resources/player/players/players.module";
import { PlayerMotionsModule } from "./resources/player/player-motions/player-motions.module";
import { FriendsModule } from "./resources/friends/friends.module";
import { PlayerEffectsModule } from "./resources/player/player-effects/player-effects.module";
import { PlayerQuestsModule } from "./resources/player/player-quests/player-quests.module";
import { EventItemsModule } from "./resources/event-items/event-items.module";
import { PlayerLifeStatsModule } from "./resources/player/player-life-stats/player-life-stats.module";
import { PlayerTitlesModule } from "./resources/player/player-titles/player-titles.module";
import { PlayerWardrobesModule } from "./resources/player/player-wardrobes/player-wardrobes.module";
import { OldNamesModule } from "./resources/old-names/old-names.module";
import { PlayerAppearanceModule } from "./resources/player/player-appearance/player-appearance.module";
import { MailModule } from "./resources/mail/mail.module";
import { PlayerPetsModule } from "./resources/player/player-pets/player-pets.module";
import { PlayerNpcFactionsModule } from "./resources/player/player-npc-factions/player-npc-factions.module";
import { CraftCooldownsModule } from "./resources/craft-cooldowns/craft-cooldowns.module";
import { GuidesModule } from "./resources/guides/guides.module";
import { PlayerMacrossesModule } from "./resources/player/player-macrosses/player-macrosses.module";
import { PlayerSkillsModule } from "./resources/player/player-skills/player-skills.module";
import { SurveysModule } from "./resources/surveys/surveys.module";
import { PlayerEmotionsModule } from "./resources/player/player-emotions/player-emotions.module";
import { PlayerBindPointModule } from "./resources/player/player-bind-point/player-bind-point.module";
import { BrokersModule } from "./resources/brokers/brokers.module";
import { PlayerGameStatsModule } from "./resources/player/player-game-stats/player-game-stats.module";
import { LegionMembersModule } from "./resources/legion-members/legion-members.module";
import { LegionsModule } from "./resources/legions/legions.module";
import { LegionEmblemsModule } from "./resources/legion-emblems/legion-emblems.module";
import { LegionHistoriesModule } from "./resources/legion-histories/legion-histories.module";
import { LegionAnnouncementListsModule } from "./resources/legion-announcement-lists/legion-announcement-lists.module";
import { PlayerVarsModule } from "./resources/player/player-vars/player-vars.module";
import { PlayerRegisteredItemsModule } from "./resources/player/player-registered-items/player-registered-items.module";
import { PlayerAtreianBestiariesModule } from "./resources/player/player-atreian-bestiaries/player-atreian-bestiaries.module";
import { PlayerSettingsModule } from "./resources/player/player-settings/player-settings.module";
import { PlayerCooldownsModule } from "./resources/player/player-cooldowns/player-cooldowns.module";
import { PortalCooldownsModule } from "./resources/portal-cooldowns/portal-cooldowns.module";
import { PlayerPunishementsModule } from "./resources/player/player-punishements/player-punishements.module";
import { ItemCooldownsModule } from "./resources/item-cooldowns/item-cooldowns.module";
import { PlayerCpsModule } from "./resources/player/player-cps/player-cps.module";
import { AbyssRanksModule } from "./resources/abyss-ranks/abyss-ranks.module";
import { BlocksModule } from "./resources/blocks/blocks.module";
import { PlayerStigmasEquippedsModule } from "./resources/player/player-stigmas-equippeds/player-stigmas-equippeds.module";
import { WebRewardsModule } from "./resources/web-rewards/web-rewards.module";
import { PlayerRecipesModule } from "./resources/player/player-recipes/player-recipes.module";
import { BannedIpModule } from "./resources/bans/banned-ip/banned-ip.module";
import { BannedMacModule } from "./resources/bans/banned-mac/banned-mac.module";
import { AccountsService } from "./resources/accounts/accounts.service";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    AccountsModule,
    PlayersModule,
    PlayerMotionsModule,
    FriendsModule,
    PlayerEffectsModule,
    PlayerQuestsModule,
    EventItemsModule,
    PlayerLifeStatsModule,
    PlayerTitlesModule,
    PlayerWardrobesModule,
    OldNamesModule,
    PlayerAppearanceModule,
    MailModule,
    PlayerPetsModule,
    PlayerNpcFactionsModule,
    CraftCooldownsModule,
    GuidesModule,
    PlayerMacrossesModule,
    PlayerSkillsModule,
    SurveysModule,
    PlayerEmotionsModule,
    PlayerBindPointModule,
    BrokersModule,
    PlayerGameStatsModule,
    LegionMembersModule,
    LegionsModule,
    LegionEmblemsModule,
    LegionHistoriesModule,
    LegionAnnouncementListsModule,
    PlayerVarsModule,
    PlayerRegisteredItemsModule,
    PlayerAtreianBestiariesModule,
    PlayerSettingsModule,
    PlayerCooldownsModule,
    PortalCooldownsModule,
    PlayerPunishementsModule,
    ItemCooldownsModule,
    PlayerCpsModule,
    AbyssRanksModule,
    BlocksModule,
    PlayerStigmasEquippedsModule,
    WebRewardsModule,
    PlayerRecipesModule,
    BannedIpModule,
    BannedMacModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .exclude(
        { path: "accounts/login", method: RequestMethod.POST },
        { path: "register", method: RequestMethod.POST },
        { path: "players", method: RequestMethod.GET },
        { path: "abyssRanks", method: RequestMethod.GET },
        { path: "news", method: RequestMethod.GET }
      )
      .forRoutes(
        { path: "accounts", method: RequestMethod.ALL },
        { path: "players", method: RequestMethod.ALL },
        { path: "abyssRank", method: RequestMethod.ALL },
        { path: "web-rewards", method: RequestMethod.ALL },
      );
  }
}
